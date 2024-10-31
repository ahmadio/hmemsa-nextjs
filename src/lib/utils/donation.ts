// lib/utils/donation.ts

/**
 * Formats a number as currency
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Calculates the percentage of progress
 */
export function calculateProgress(raised: number, target: number): number {
  return Math.min(100, (raised / target) * 100);
}

/**
 * Formats the display text for a donation amount
 */
export function formatDonationAmount(
  amount: string,
  frequency: "one-time" | "monthly"
): string {
  const formattedAmount = formatCurrency(Number(amount));
  return `${formattedAmount}${frequency === "monthly" ? "/month" : ""}`;
}

/**
 * Validates a donation amount against project limits
 */
export function validateDonationAmount(
  amount: number,
  projectTarget: number,
  projectRaised: number,
  frequency: "one-time" | "monthly"
): { isValid: boolean; error?: string } {
  if (amount <= 0) {
    return {
      isValid: false,
      error: "Donation amount must be greater than zero",
    };
  }

  const remaining = projectTarget - projectRaised;

  if (frequency === "one-time" && amount > remaining) {
    return {
      isValid: false,
      error: `Maximum donation amount for this project is ${formatCurrency(
        remaining
      )}`,
    };
  }

  // For monthly donations, we might want to have different validation rules
  if (frequency === "monthly" && amount > remaining / 12) {
    return {
      isValid: false,
      error: `Maximum monthly donation for this project is ${formatCurrency(
        remaining / 12
      )}`,
    };
  }

  return { isValid: true };
}

/**
 * Get suggested donation amounts based on target amount
 */
export function getSuggestedAmounts(targetAmount: number): string[] {
  const baseAmounts = [25, 50, 100, 250, 500, 1000];
  const maxSuggestion = targetAmount * 0.5; // 50% of target as max suggestion

  return baseAmounts
    .filter((amount) => amount <= maxSuggestion)
    .slice(0, 4) // Take only 4 suggestions
    .map(String);
}
