import React, { useState, useEffect } from 'react';

import Question from 'components/Question';
import ProgressBar from 'components/ProgressBar';
import { useWindowResize } from 'utils/hooks';
import * as S from './styles';

const questionData = [
  {
    question: 'Billing',
    step: 1,
  },
  {
    question: 'Shipping',
    step: 2,
  },
  {
    question: 'Payment',
    step: 3,
  },
  {
    question: 'Confirmation',
    step: 4,
  },
];

const QuestionSlider = (props: any) => {
  const [horizontalPosition, setHorizontalPosition] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [step, setStep] = useState(0);
  // @ts-ignore
  const { viewportWidth } = useWindowResize();

  useEffect(() => {
    setHorizontalPosition(-viewportWidth * step);
  }, [viewportWidth]);

  console.log({ viewportWidth });

  const handleSubmit = (questionStep: number) => {
    setIsProcessing(true);
    console.log('handle submit clicked');
    setTimeout(() => {
      setIsProcessing(false);
      setStep(questionStep);
      setHorizontalPosition(-viewportWidth * questionStep);
    }, 850);
  };

  return (
    <S.Wrapper>
      <ProgressBar step={step} questionData={questionData} />
      <S.SliderContainer horizontalPosition={horizontalPosition}>
        {questionData.map((question: any) => (
          <Question
            key={question.step}
            step={question.step}
            question={question.question}
            viewportWidth={viewportWidth}
            handleSubmit={handleSubmit}
            isProcessing={isProcessing}
          />
        ))}
      </S.SliderContainer>
    </S.Wrapper>
  );
};

export default QuestionSlider;
