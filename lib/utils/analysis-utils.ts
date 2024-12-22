import type { Review } from '@/lib/types/review';

export function calculateAverageSentiment(reviews: Review[]): string {
  if (reviews.length === 0) return 'N/A';
  
  const sentimentScores = {
    positive: 1,
    neutral: 0,
    negative: -1,
  };
  
  const totalScore = reviews.reduce((sum, review) => 
    sum + sentimentScores[review.sentiment], 0);
  
  const averageScore = totalScore / reviews.length;
  
  if (averageScore > 0.3) return 'Positive';
  if (averageScore < -0.3) return 'Negative';
  return 'Neutral';
}

export function calculateSentimentDistribution(reviews: Review[]): Array<{ name: string; value: number }> {
  if (reviews.length === 0) {
    return [
      { name: 'Positive', value: 0 },
      { name: 'Neutral', value: 0 },
      { name: 'Negative', value: 0 },
    ];
  }

  const counts = reviews.reduce((acc, review) => {
    acc[review.sentiment]++;
    return acc;
  }, { positive: 0, neutral: 0, negative: 0 });

  const total = reviews.length;
  
  return [
    { name: 'Positive', value: Math.round((counts.positive / total) * 100) },
    { name: 'Neutral', value: Math.round((counts.neutral / total) * 100) },
    { name: 'Negative', value: Math.round((counts.negative / total) * 100) },
  ];
}

export function calculateFileStats(reviews: Review[]) {
  return {
    totalReviews: reviews.length,
    averageSentiment: calculateAverageSentiment(reviews),
    fakeReviews: reviews.filter(r => r.isFake).length,
    sentimentDistribution: calculateSentimentDistribution(reviews),
  };
}