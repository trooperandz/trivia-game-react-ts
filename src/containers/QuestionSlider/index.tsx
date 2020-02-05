import React, { useState, useEffect } from 'react';

import Question from 'components/Question';
import QuestionIndicator from 'components/QuestionIndicator';
import { useWindowResize } from 'utils/hooks';
import * as S from './styles';

const questionData = [
  {
    question:
      'How many licks does it take to get to the center of a tootsie roll pop?',
    questionNumber: 1,
  },
  {
    question: 'When was the U.S. civil war fought?',
    questionNumber: 2,
  },
  {
    question: 'How many times does a human heart beat in an average lifetime?',
    questionNumber: 3,
  },
  {
    question: 'How many software developers are there in the United States?',
    questionNumber: 4,
  },
];

const QuestionSlider = (props: any) => {
  const [horizontalPosition, setHorizontalPosition] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  // @ts-ignore
  const { viewportWidth } = useWindowResize();

  useEffect(() => {
    setHorizontalPosition(-viewportWidth * questionNumber);
  }, [viewportWidth]);

  console.log({ viewportWidth });

  const handleSubmit = (questionStep: number) => {
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setQuestionNumber(questionStep);
      setHorizontalPosition(-viewportWidth * questionStep);
    }, 650);
  };

  const handleProgressClick = (questionStep: number) => {
    setQuestionNumber(questionStep);
    setHorizontalPosition(-viewportWidth * questionStep);
  };

  return (
    <S.Wrapper>
      <QuestionIndicator
        questionNumber={questionNumber}
        questionData={questionData}
        handleProgressClick={handleProgressClick}
      />
      <S.SliderContainer horizontalPosition={horizontalPosition}>
        {questionData.map((item: any) => {
          const { questionNumber, question } = item;
          return (
            <Question
              key={questionNumber}
              questionNumber={questionNumber}
              question={question}
              viewportWidth={viewportWidth}
              handleSubmit={handleSubmit}
              isProcessing={isProcessing}
            />
          );
        })}
      </S.SliderContainer>
    </S.Wrapper>
  );
};

export default QuestionSlider;
