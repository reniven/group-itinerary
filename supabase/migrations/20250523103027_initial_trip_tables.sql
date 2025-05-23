-- Create users table that extends auth.users
CREATE TABLE users (
    user_id UUID REFERENCES auth.users(id) PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    email TEXT UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create planned_trips table
CREATE TABLE planned_trips (
    planned_trip_id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    trip_name TEXT NOT NULL,
    status TEXT NOT NULL CHECK (status IN ('planning', 'confirmed', 'completed', 'cancelled')),
    created_by UUID REFERENCES users(user_id) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create trip_participants table
CREATE TABLE trip_participants (
    trip_participant_id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    planned_trip_id UUID REFERENCES planned_trips(planned_trip_id) ON DELETE CASCADE NOT NULL,
    user_id UUID REFERENCES users(user_id) NOT NULL,
    role TEXT NOT NULL CHECK (role IN ('organizer', 'participant')),
    status TEXT NOT NULL CHECK (status IN ('invited', 'accepted', 'declined')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    UNIQUE(planned_trip_id, user_id)
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE planned_trips ENABLE ROW LEVEL SECURITY;
ALTER TABLE trip_participants ENABLE ROW LEVEL SECURITY;

-- Users policies
CREATE POLICY "Users can view their own profile"
    ON users FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile"
    ON users FOR UPDATE
    USING (auth.uid() = user_id);

-- Planned trips policies
CREATE POLICY "Anyone can view planned trips"
    ON planned_trips FOR SELECT
    USING (true);

CREATE POLICY "Users can create planned trips"
    ON planned_trips FOR INSERT
    WITH CHECK (auth.uid() = created_by);

CREATE POLICY "Trip organizers can update their trips"
    ON planned_trips FOR UPDATE
    USING (
        EXISTS (
            SELECT 1 FROM trip_participants
            WHERE trip_participants.planned_trip_id = planned_trips.planned_trip_id
            AND trip_participants.user_id = auth.uid()
            AND trip_participants.role = 'organizer'
        )
    );

-- Trip participants policies
CREATE POLICY "Anyone can view trip participants"
    ON trip_participants FOR SELECT
    USING (true);

CREATE POLICY "Users can join trips"
    ON trip_participants FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own participation status"
    ON trip_participants FOR UPDATE
    USING (auth.uid() = user_id);

-- Create a trigger to automatically create a user profile when a new user signs up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.users (user_id, email, first_name, last_name)
    VALUES (
        NEW.id,
        NEW.email,
        SPLIT_PART(NEW.email, '@', 1), -- Default first_name to part before @ in email
        '' -- Default empty last_name
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger the function every time a user is created
CREATE OR REPLACE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user(); 