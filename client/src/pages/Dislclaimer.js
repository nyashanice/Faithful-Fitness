import React from "react";
import "../styles/Disclaimer.css";

export default function Disclaimer() {
  return (
    <div className="p-3">
      <h1 className="p-1 disclaimer-heading text-center">
        Disclaimer: Faithful Fitness
      </h1>
      <div className="p-1 disclaimer-txt">
        The workout generator provided on this platform (Faithful Fitness) is
        designed to offer exercise suggestions and help users plan their fitness
        routines. However, it is important to note that the information and
        recommendations provided are based on personal experience and are not
        provided by certified fitness professionals or trainers.
      </div>
      <div className="p-1 disclaimer-txt">
        <h6 className="text-center">1. Accuracy of Information: </h6>
        While every effort has been made to ensure the accuracy and reliability
        of the exercise recommendations, we acknowledge that some information
        may be subjective, outdated, or inaccurate. Therefore, users should
        exercise caution and consult with a certified fitness professional
        before incorporating any exercises or routines from this generator into
        their workout regimen.
      </div>
      <div className="p-1 disclaimer-txt">
        <h6 className="text-center"> 2. Individual Differences: </h6>Every
        individual has unique physical conditions, capabilities, and
        limitations. The exercises suggested by Faithful Fitness may not be
        suitable for everyone. It is essential to consider personal fitness
        levels, pre-existing medical conditions, and any other individual
        factors before attempting any exercises. Users should consult with a
        medical professional or certified fitness trainer to determine what
        exercises are appropriate for their specific needs.
      </div>
      <div className="p-1 disclaimer-txt">
        <h6 className="text-center"> 3. Comfort and Safety:</h6> It is crucial
        to prioritize personal comfort and safety when performing any exercises.
        Users should never push themselves beyond their comfort level or attempt
        exercises that cause pain or discomfort. If at any point during a
        workout an exercise feels challenging or causes discomfort, users should
        stop immediately and seek guidance from a certified fitness
        professional.
      </div>
      <div className="p-1 disclaimer-txt">
        <h6 className="text-center"> 4. Professional Guidance:</h6> This workout
        generator does not replace the expertise and guidance of a certified
        fitness professional. Users are encouraged to consult with a qualified
        personal trainer, fitness coach, or medical professional before
        beginning any new exercise program or making significant changes to
        their current routine.
      </div>
      <div className="p-1 disclaimer-txt">
        <h6 className="text-center"> 5. Assumption of Risk:</h6> By using
        Faithful Fitness, users acknowledge and accept that they are voluntarily
        participating in physical activities and assume all risks associated
        with such activities. The creators and operators of this platform shall
        not be held responsible for any injuries, damages, or losses that may
        result from the use of this workout generator.
      </div>
      <div className="p-1 disclaimer-txt">
        Remember, the primary goal of Faithful Fitness is to provide exercise
        suggestions and inspiration. Your health and safety are paramount, and
        consulting with a certified fitness professional is strongly advised
        before starting any new exercise program.
      </div>
    </div>
  );
}
