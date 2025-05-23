-- Create trip_responses table
CREATE TABLE trip_responses (
    trip_response_id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    planned_trip_id UUID REFERENCES planned_trips(planned_trip_id) ON DELETE CASCADE NOT NULL,
    user_id UUID REFERENCES users(user_id) NOT NULL,
    destination_description TEXT,
    date_description TEXT,
    budget_description TEXT,
    activities_description TEXT,
    purpose_description TEXT,
    departure TEXT,
    additional_description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    UNIQUE(planned_trip_id, user_id)
);

-- Enable Row Level Security
ALTER TABLE trip_responses ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view responses for trips they are part of"
    ON trip_responses FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM trip_participants
            WHERE trip_participants.planned_trip_id = trip_responses.planned_trip_id
            AND trip_participants.user_id = auth.uid()
        )
    );

CREATE POLICY "Users can create their own responses"
    ON trip_responses FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own responses"
    ON trip_responses FOR UPDATE
    USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own responses"
    ON trip_responses FOR DELETE
    USING (auth.uid() = user_id); 