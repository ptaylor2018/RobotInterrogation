﻿namespace RobotInterrogation.Models
{
    public enum InterviewStatus
    {
        WaitingForConnections,
        PositionSelection,

        SelectingPenalty_Interviewer,
        SelectingPenalty_Suspect,

        SelectingPacket,

        /*
        Setup_BothPlayers,
        Setup_WaitingForInterviewer,
        Setup_WaitingForSuspect,
        
        ReadyToStart,

        InProgress,

        FinalQuestion,
        */

        Finished,
    }
}