'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { LuArrowRightSquare } from 'react-icons/lu';

import { useGetQuestionsQuery } from '@/app/redux/endPoints/questionEndpoints';
import LoadingSpinner from '@/components/reuse/LoadingSpinner';
import NavBar from '@/components/reuse/navBar';
import { IMAGES } from '@/constants/ImageConstants';

const WinePreferenceQuestion = () => {
  const router = useRouter();
  const { data: questionObj, isLoading } = useGetQuestionsQuery();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    // Update selectedAnswers array dynamically when questions are fetched
    if (questionObj) {
      setSelectedAnswers(Array(questionObj.length).fill(null));
    }
  }, [questionObj]);

  useEffect(() => {
    setShowDialog(false); // Reset dialog state when the question changes
  }, [currentQuestionIndex]);

  const handleSelect = (questionIndex: number, optionId: number) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = optionId;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleNext = () => {
    if (selectedAnswers[currentQuestionIndex] === null) {
      setShowDialog(true);
      return;
    }

    if (currentQuestionIndex < (questionObj?.length || 0) - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      router.push('/new');
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent, questionIndex: number, optionId: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleSelect(questionIndex, optionId);
    }
  };

  const closeDialog = () => {
    setShowDialog(false);
  };

  return (
    <>
      <NavBar showElements={false} />
      {isLoading ? (
        <div className="flex h-full items-center justify-center">
          <LoadingSpinner />
        </div>
      )
        : (
            <div className="flex h-screen w-full flex-col items-center justify-center space-y-5 bg-secondBg bg-cover bg-no-repeat lg:space-y-10">
              {/* Question */}
              <h2 className="text-center text-2xl font-semibold text-gray-800">
                {questionObj[currentQuestionIndex]?.question_id}
                {' '}
                {questionObj[currentQuestionIndex]?.question}
              </h2>
              <Image src={IMAGES.Capa_1} alt=" logo" className="size-20" width={100} height={100}></Image>
              {/* Options */}
              <div className="grid w-auto grid-cols-2 justify-center gap-4 p-5 lg:flex ">
                {questionObj[currentQuestionIndex]?.options.map(option => (
                  <div
                    key={option.id}
                    onClick={() => handleSelect(currentQuestionIndex, option.id)}
                    onKeyDown={e => handleKeyDown(e, currentQuestionIndex, option.id)}
                    tabIndex={0}
                    role="button"
                    className={`mx-auto max-w-48 cursor-pointer rounded-xl border-2 p-4 shadow transition duration-200 ease-in-out hover:border-gray-300 hover:bg-queGrad hover:shadow-2xl 
              ${
                  selectedAnswers[currentQuestionIndex] === option.id
                    ? ' bg-queGrad text-gray-800 '
                    : 'bg-white text-gray-700'
                  }`}
                  >
                    <h3 className="mb-2 text-center text-lg font-bold">{option.option}</h3>
                    <p className="text-sm">{option.description}</p>
                  </div>
                ))}
              </div>
              <div className="flex space-x-10 text-4xl text-custom-color">
                <GrPrevious
                  onClick={handlePrevious}
                  className={`cursor-pointer ${currentQuestionIndex === 0 ? 'cursor-not-allowed opacity-50' : ''}`}
                />
                {currentQuestionIndex === (questionObj?.length || 0) - 1
                  ? (
                      <LuArrowRightSquare
                        onClick={handleNext}
                        className="cursor-pointer"
                      />
                    )
                  : (
                      <GrNext
                        onClick={handleNext}
                        className="cursor-pointer"
                      />
                    )}
              </div>
              {showDialog && (
                <div className="fixed inset-0 flex items-center justify-center p-5 backdrop-blur-md">
                  <div className="rounded-2xl border bg-secondBg p-8 shadow-lg">
                    <p className="mb-4 text-lg">Please select an option before proceeding.</p>
                    <button type="submit" onClick={closeDialog} className="rounded-xl bg-custom-color px-8 py-2 text-white">
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
    </>
  );
};

export default WinePreferenceQuestion;
