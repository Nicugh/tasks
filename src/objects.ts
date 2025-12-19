import { Question, QuestionType } from "./interfaces/question";

/**
 * Create a new blank question.
 */
export function makeBlankQuestion(
    id: number,
    name: string,
    type: QuestionType,
): Question {
    return {
        id,
        name,
        body: "",
        type,
        options: [],
        expected: "",
        points: 1,
        published: false,
    };
}

/**
 * Check if an answer is correct (trim + ignore case).
 */
export function isCorrect(question: Question, answer: string): boolean {
    return (
        answer.trim().toLowerCase() === question.expected.trim().toLowerCase()
    );
}

/**
 * Check if an answer is valid.
 */
export function isValid(question: Question, answer: string): boolean {
    if (question.type === "short_answer_question") {
        return true;
    }

    // multiple choice: must match EXACTLY one option
    return question.options.includes(answer);
}

/**
 * id + first 10 characters of name
 */
export function toShortForm(question: Question): string {
    return `${question.id}: ${question.name.slice(0, 10)}`;
}

/**
 * Convert question to Markdown
 */
export function toMarkdown(question: Question): string {
    let result = `# ${question.name}\n${question.body}`;

    if (question.type === "multiple_choice_question") {
        for (const option of question.options) {
            result += `\n- ${option}`;
        }
    }

    return result;
}

/**
 * Rename question (immutable)
 */
export function renameQuestion(question: Question, newName: string): Question {
    return {
        ...question,
        name: newName,
    };
}

/**
 * Toggle published flag
 */
export function publishQuestion(question: Question): Question {
    return {
        ...question,
        published: !question.published,
    };
}

/**
 * Duplicate question with new id
 */
export function duplicateQuestion(id: number, oldQuestion: Question): Question {
    return {
        ...oldQuestion,
        id,
        name: `Copy of ${oldQuestion.name}`,
        options: [...oldQuestion.options],
        published: false,
    };
}

/**
 * Add option (immutable, deep copy)
 */
export function addOption(question: Question, newOption: string): Question {
    return {
        ...question,
        options: [...question.options, newOption],
    };
}

/**
 * Merge two questions
 */
export function mergeQuestion(
    id: number,
    name: string,
    contentQuestion: Question,
    { points }: { points: number },
): Question {
    return {
        id,
        name,
        body: contentQuestion.body,
        type: contentQuestion.type,
        options: [...contentQuestion.options],
        expected: contentQuestion.expected,
        points,
        published: false,
    };
}
