import { useState } from "react";

export function useForm(steps, setData, formTamplate) {
  const [currentStep, setCurrentStep] = useState(0);

  function changeStep(i, e) {
    if (e) e.preventDefault();

    if (i < 0 || i >= steps.length) return;

    setCurrentStep(i);
  }

  function finish() {
    alert("Sua avalaiação foi enviada com sucesso!");
    setData(formTamplate);
    setCurrentStep(0);
  }

  return {
    currentStep,
    currentComponent: steps[currentStep],
    changeStep,
    finish,
    isLastStep: currentStep + 1 === steps.length ? true : false,
    isFirstStep: currentStep === 0 ? true : false,
  };
}
