import * as React from 'react';
import { Countdown } from './elements/Countdown';
import { IInterviewQuestion, InterviewQuestion } from './elements/InterviewQuestion';
import { useState } from 'react';
import { PositionHeader } from './elements/PositionHeader';
import { InterviewPosition } from '../interviewReducer';
import { ActionSet } from './elements/ActionSet';

interface IProps {
    questions: IInterviewQuestion[];
    suspectBackground: string;
    penalty: string;
    duration: number;
    conclude: (isRobot: boolean) => void;
}

export const InterviewerInProgress: React.FunctionComponent<IProps> = props => {
    const questions = props.questions.map((q, i) => <InterviewQuestion question={q} key={i} />);

    const isHuman = () => props.conclude(false);
    const isRobot = () => props.conclude(true);

    const [elapsed, setElapsed] = useState(false);
    
    const elapsedPrompt = elapsed
        ? <p>You can ask one final question.</p>
        : <p/>;

    return <div>
        <PositionHeader position={InterviewPosition.Interviewer} />
        <p>Ask the Suspect questions and decide whether they are human or a robot.</p>

        <div>
            {questions}
        </div>

        <p>Penalty: {props.penalty}</p>

        <p>Suspect background: {props.suspectBackground}</p>

        <Countdown
            duration={props.duration}
            onElapsed={() => setElapsed(true)}
        />

        {elapsedPrompt}

        <ActionSet>
            <button
                onClick={isHuman}
                disabled={!elapsed}
                title={elapsed ? undefined : `You can't certify the subject as human until the time has elapsed`}
            >
                Suspect is Human
            </button>
            <button onClick={isRobot}>Suspect is a Robot</button>
        </ActionSet>
    </div>
}