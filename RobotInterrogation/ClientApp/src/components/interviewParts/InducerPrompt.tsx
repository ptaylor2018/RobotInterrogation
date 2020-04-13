import * as React from 'react';
import { InterviewPosition } from '../interviewReducer';
import './ValueDisplay.css';
import { PositionHeader } from './elements/PositionHeader';
import { InterferenceSolution } from './elements/InterferenceSolution';
import { PacketDisplay } from './elements/PacketDisplay';
import { ActionSet } from './elements/ActionSet';

interface IProps {
    solution: string[];
    packet: string;
    continue: () => void;
}

export const InducerPrompt: React.FunctionComponent<IProps> = props => {
    return (
        <div>
            <PositionHeader position={InterviewPosition.Interviewer} />

            <PacketDisplay packet={props.packet} />

            <InterferenceSolution solution={props.solution} />

            <p>Ask the Suspect a question based on the sequence above, then click below to administer the inducer, revealing the Suspect's role to them.</p>
            <p>Robots will see the same diagram as you, but need time to read the details of their role. Humans will need to solve a puzzle to answer your question.</p>

            <div>
                Example questions:
                <ul>
                    <li>What letters come between A and D?</li>
                    <li>What letter follows B?</li>
                </ul>
            </div>
            
            <ActionSet>
                <button onClick={() => props.continue()}>Continue</button>
            </ActionSet>
        </div>
    )
}