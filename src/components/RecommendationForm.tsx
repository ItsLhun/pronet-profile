import React from 'react';
import { useForm } from 'react-hook-form';

import { Button } from './Button';

interface RecommendationFormProps {
  onSubmit: (text: string) => void;
  isSubmitting?: boolean;
}

interface FormData {
  recommendation: string;
}

export const RecommendationForm = ({ onSubmit, isSubmitting = false }: RecommendationFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const submitHandler = (data: FormData) => {
    onSubmit(data.recommendation);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="bg-content-surface p-4 rounded-md border border-border"
    >
      <label htmlFor="recommendation" className="block text-text font-semibold mb-2">
        Recommendations
      </label>
      <textarea
        id="recommendation"
        {...register('recommendation', { required: true, minLength: 50 })}
        rows={4}
        className={`w-full text-sm p-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary ${
          errors.recommendation ? 'border-red-500' : 'border-border'
        }`}
        placeholder="Write your professional recommendation (minimum 50 characters)..."
        disabled={isSubmitting}
      />
      {errors.recommendation && (
        <p className="text-red-500 mt-1 text-sm">
          Recommendation must be at least 50 characters long.
        </p>
      )}
      <div className="flex flex-row justify-between items-center mt-4">
        <span className="text-text-muted text-sm">Minimum 50 characters required</span>
        <Button type="submit" variant="primary" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit Recommendation'}
        </Button>
      </div>
    </form>
  );
};
