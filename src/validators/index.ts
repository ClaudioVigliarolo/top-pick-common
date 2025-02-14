import { QuestionType, StatAction, StatTopicAction, UserRole, ValidationAction, ValidationStatus } from "../interfaces";
import { SupportSubject } from "../interfaces/support";

export function validateUserId(input: any): boolean {
    if (!input) return false;
    return input.length > 10;
}

export function validateCountry(input: any): boolean {
    if (!input) return true;
    return input.length < 50;
}

export function validateProfession(input: any): boolean {
    if (!input) return true;
    return input.length < 50;
}

export function validateLanguage(input: any): boolean {
    if (!input) return true;
    return input.length < 50;
}

export function validateLimits(skip: any, limit: any): boolean {
    const parsedSkip = parseInt(skip);
    const parsedLimit = parseInt(limit);
    return parsedSkip >= 0 && parsedLimit >= 0;
}

export function validateLimit(limit: any): boolean {
    return parseInt(limit) >= 0;
}

export function validateValidationAction(value: ValidationAction): boolean {
    if (!Object.values(ValidationAction).includes(value)) {
        return false;
    }
    return true;
}

export function verifyValidationStatus(
    minValidations: number,
    minConfirmationThreshold: number, // 0-100
    confirmations: number,
    rejections: number
): ValidationStatus {
    let res = ValidationStatus.Pending;
    const validations = confirmations + rejections;
    if (validations >= minValidations) {
        const threshold = confirmations / validations;
        if (threshold >= minConfirmationThreshold) {
            res = ValidationStatus.Active;
        } else {
            res = ValidationStatus.Rejected;
        }
    }
    return res;
}

export function validateReportReason(value: any): boolean {
    return true;
}

export function validatePrismaId(id: any): boolean {
    return parseInt(id) > 0;
}

export function validateTitle(title: any): boolean {
    if (!title) return false;
    return typeof title === "string" && title.length > 0;
}

export function validatePassword(pw: any): boolean {
    return /[a-z]/.test(pw) && pw.length > 6;
}

export function validateEmail(email: any): boolean {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

export function validateUserName(input: any): boolean {
    if (!input) return false;
    return input.length > 3 && input.length < 35;
}

export function validateFirstname(input: any): boolean {
    if (!input) return true;
    return input.length > 3 && input.length < 35;
}

export function validateLastname(input: any): boolean {
    if (!input) return true;
    return input.length > 3 && input.length < 35;
}

export function validateListName(input: any): boolean {
    if (!input) return false;
    return input.length > 3 && input.length < 35;
}

export function validateURL(str: any): boolean {
    let url;
    try {
        url = new URL(str);
    } catch (_) {
        return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
}

export function validateFacebookUrl(url: any): boolean {
    return /^(https?:\/\/)?((w{3}\.)?)facebook.com\/.*/i.test(url);
}

export function validateInstagramUrl(url: any): boolean {
    return /^(https?:\/\/)?((w{3}\.)?)instagram.com\/.*/i.test(url);
}

export function validateTwitterUrl(url: any): boolean {
    return /^(https?:\/\/)?((w{3}\.)?)twitter.com\/.*/i.test(url);
}

export function validateYoutubeUrl(url: any): boolean {
    return /^(https?:\/\/)?((w{3}\.)?)youtube.com\/.*/i.test(url);
}

export function validateSupportSubject(value: any): boolean {
    if (!Object.values(SupportSubject).includes(value)) {
        return false;
    }
    return true;
}

export function validateSupportDescriptionMin(input: any): boolean {
    return input.length >= 20;
}

export function validateSupportDescriptionMax(input: any): boolean {
    return input.length <= 400;
}

export function validateUserInterestsDescriptionMin(input: string): boolean {
    if (!input) return true;
    return input.length > 80;
}

export function validateUserInterestsDescriptionMax(input: string): boolean {
    return input.length < 500;
}

export function validateUserInterestsDescription(input: string): boolean {
    return (
        validateUserInterestsDescriptionMin(input) &&
        validateUserInterestsDescriptionMax(input)
    );
}

export function validateSupportDescription(input: any): boolean {
    return (
        validateSupportDescriptionMin(input) &&
        validateSupportDescriptionMax(input)
    );
}

export function validateAnswerTitleMin(input: any): boolean {
    return input.length >= 5;
}

export function validateAnswerTitleMax(input: any): boolean {
    return input.length <= 500;
}

export function validateAnswerTitle(input: any): boolean {
    return validateAnswerTitleMin(input) && validateAnswerTitleMax(input);
}

export function validateQuestionTitleMin(input: any): boolean {
    return input.length >= 5;
}

export function validateQuestionTitleMax(input: any): boolean {
    return input.length <= 500;
}

export function validateQuestionTitle(input: any): boolean {
    return validateQuestionTitleMin(input) && validateQuestionTitleMax(input);
}

export function validateUserRole(value: any): boolean {
    if (!Object.values(UserRole).includes(value)) {
        return false;
    }
    return true;
}

export function validateStatTopicAction(value: any): boolean {
    if (!Object.values(StatTopicAction).includes(value)) {
        return false;
    }
    return true;
}

export function validateStatAction(value: any): boolean {
    if (!Object.values(StatAction).includes(value)) {
        return false;
    }
    return true;
}

export function validateQuestionType(value: any): boolean {
    if (!Object.values(QuestionType).includes(value)) {
        return false;
    }
    return true;
}