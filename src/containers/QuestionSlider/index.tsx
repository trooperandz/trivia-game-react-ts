import React, { useState, useEffect } from 'react';

import Question from 'components/Question';
import QuestionIndicator from 'components/QuestionIndicator';
import { useWindowResize } from 'utils/hooks';
import { questionData } from 'utils/api';
import * as S from './styles';

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
