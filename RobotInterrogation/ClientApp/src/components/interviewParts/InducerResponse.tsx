import * as React from 'react';
import { InterviewPosition } from '../interviewReducer';
import './ValueDisplay.css';
import { PositionHeader } from './elements/PositionHeader';
import { InterferenceSolution } from './elements/InterferenceSolution';
import { PacketDisplay } from './elements/PacketDisplay';

interface IProps {
    solution: string[];
    packet: string;
    correct: () => void;
    incorrect: () => void;
}

export const InducerResponse: React.FunctionComponent<IProps> = props => {
    return (
        <div>
            <PositionHeader position={InterviewPosition.Interviewer} />

            <PacketDisplay packet={props.packet} />

            <InterferenceSolution solution={props.solution} />

            <p>
                Wait for the suspect to respond to your question, then indicate whether their response is correct.
            </p>

            <div className="actionSet">
                <button onClick={() => props.correct()}>Correct response</button>
                <button onClick={() => props.incorrect()}>Incorrect response</button>
            </div>
        </div>
    )
}