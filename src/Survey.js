import React, { useState } from "react";
import Poll from "react-polls";

const pollQuestion = "2022 MVP Fan Vote ";
const answers = [
  { option: "Lebron James", votes: 200 },
  { option: "Kevin Durant", votes:  120},
  { option: "Stephen Curry", votes:  150},
  { option: "Luka Doncic", votes: 90 },
  { option: "Ja Morant", votes: 40 },
  { option: "Other", votes: 20 },
];

const Fakepolls = () => {
  const [pollAnswers, setPollAnswers] = useState([...answers]);

  const handleVote = (voteAnswer) => {
    setPollAnswers((pollAnswers) =>
      pollAnswers.map((answer) =>
        answer.option === voteAnswer
          ? {
              ...answer,
              votes: answer.votes + 1
            }
          : answer
      )
    );
  };
  return (
    <div>
      <Poll
        question={pollQuestion}
        answers={pollAnswers}
        onVote={handleVote}
      />
    </div>
  );
};

export default Fakepolls;
