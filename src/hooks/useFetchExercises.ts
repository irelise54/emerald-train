import { useState, useEffect } from 'react';
import axios from 'axios';

interface Exercise {
  id: string;
  name: string;
  target: string;
  bodyPart: string;
  equipment: string;
  gifUrl: string;
}

export const useFetchExercises = (limit = 20) => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://exercisedb.p.rapidapi.com/exercises`,
          {
            headers: {
              'X-RapidAPI-Key': 'demo-key',
              'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            },
            params: { limit }
          }
        );
        setExercises(response.data);
        setError(null);
      } catch (err) {
        // For demo purposes, set some mock data
        setExercises([
          {
            id: '1',
            name: 'Push-ups',
            target: 'chest',
            bodyPart: 'upper body',
            equipment: 'body weight',
            gifUrl: 'https://placehold.co/400x400/34C759/FFFFFF?text=Push-ups'
          },
          {
            id: '2',
            name: 'Squats',
            target: 'legs',
            bodyPart: 'lower body',
            equipment: 'body weight',
            gifUrl: 'https://placehold.co/400x400/0052CC/FFFFFF?text=Squats'
          },
          {
            id: '3',
            name: 'Plank',
            target: 'core',
            bodyPart: 'core',
            equipment: 'body weight',
            gifUrl: 'https://placehold.co/400x400/F57C00/FFFFFF?text=Plank'
          },
          {
            id: '4',
            name: 'Pull-ups',
            target: 'back',
            bodyPart: 'upper body',
            equipment: 'bar',
            gifUrl: 'https://placehold.co/400x400/34C759/FFFFFF?text=Pull-ups'
          },
          {
            id: '5',
            name: 'Lunges',
            target: 'legs',
            bodyPart: 'lower body',
            equipment: 'body weight',
            gifUrl: 'https://placehold.co/400x400/0052CC/FFFFFF?text=Lunges'
          },
          {
            id: '6',
            name: 'Burpees',
            target: 'full body',
            bodyPart: 'cardio',
            equipment: 'body weight',
            gifUrl: 'https://placehold.co/400x400/F57C00/FFFFFF?text=Burpees'
          }
        ]);
        setError(null);
      } finally {
        setLoading(false);
      }
    };

    fetchExercises();
  }, [limit]);

  return { exercises, loading, error };
};
