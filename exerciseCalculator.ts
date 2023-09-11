
interface AverageValues {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}
function calculateExercises(dailyExerciseHours:number[], targetNumber:number):AverageValues {
    const NUMBER_OF_DAYS = dailyExerciseHours.length;
    const NUMBER_OF_TRAINING_DAYS = dailyExerciseHours.filter(
      (day:number) => day > 0
    ).length;
    const AVERAGE =
      dailyExerciseHours.reduce((a:number, b:number) => a + b, 0) / NUMBER_OF_DAYS;
    const IS_SUCCESS = AVERAGE > targetNumber;
    let RATING;
    if (AVERAGE > 0 && AVERAGE < 2) {
      RATING = 1;
    } else if (AVERAGE >= 2 && AVERAGE < 3) {
      RATING = 2;
    } else {
      RATING = 3;
    }
  
    let RATING_DESCRIPTION;
    if (RATING == 1) {
      RATING_DESCRIPTION = 'need improvement';
    } else if (RATING == 2) {
      RATING_DESCRIPTION = 'not too bad but could be better';
    } else {
      RATING_DESCRIPTION = 'doing GREAT, keep pushing your boundaries';
    }
    return {
      periodLength: NUMBER_OF_DAYS,
      trainingDays: NUMBER_OF_TRAINING_DAYS,
      success: IS_SUCCESS,
      rating: RATING,
      ratingDescription: RATING_DESCRIPTION,
      target: targetNumber,
      average: AVERAGE,
    };
  }
  
  const exerciseDays = [3, 0, 2, 4.5, 0, 3, 1];
  const target = 2;
  console.log(calculateExercises(exerciseDays, target));
  