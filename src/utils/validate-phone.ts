export const validatePhone = (value: string) => {
	if (!value.trim()) return true;
	return /^\+7700[1-9]\d{7}$/.test(value);
};