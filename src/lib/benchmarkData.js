export const benchmarkData = {
    models: [
        { id: 1, name: 'AILab WB1', version: null},
        { id: 2, name: 'DeepSeek V3', version: null },
        { id: 3, name: 'Qwen 2.5', version: '72B-Instruct' },
        { id: 4, name: 'Llama 3.1', version: '405B-Instruct' },
        { id: 5, name: 'Claude 3.5', version: 'Sonnet-1022' },
        { id: 6, name: 'GPT-4o', version: '0513' },
    ],
    categories: {
        English: [
            ['MMLU (EM)', 83.5, 88.5, 85.3, 88.6, 88.3, 87.2],
            ['MMLU-Rexux (EM)', 90.2, 89.1, 85.6, 86.2, 88.9, 88.0],
            ['MMLU-Pro (EM)', 73.5, 75.9, 71.6, 73.3, 78.0, 72.6],
            ['DROP (3-shot F1)', 87.3, 91.6, 87.8, 88.7, 88.3, 83.7],
            ['IF-Eval (Prompt Strict)', 83.8, 86.1, 80.6, 86.0, 86.5, 84.3],
            ['GPQA-Diamond (Pass@1)', 62.6, 59.1, 41.3, 51.1, 65.0, 49.9],
            ['SimpleQA (Correct)', 23.1, 24.9, 10.2, 17.1, 28.4, 38.2],
            ['FRAMES (Acc.)', 74.2, 73.3, 65.4, 70.0, 72.5, 80.5],
            ['LongBench v2 (Acc.)', 45.8, 48.7, 35.4, 36.1, 41.0, 48.1],
        ],
        Code: [
            ['HumanEval-Mul (Pass@1)', 83.5, 82.6, 77.4, 77.2, 81.7, 80.5],
            ['LiveCodeBench (Pass@1-COT)', 41.5, 40.5, 29.2, 28.4, 36.3, 33.4],
            ['LiveCodeBench (Pass@1)', 38.7, 37.6, 28.4, 30.1, 32.8, 34.2],
            ['Codeforces (Percentile)', 53.4, 51.6, 35.6, 25.3, 20.3, 23.6],
            ['SWE Verified (Resolved)', 40.2, 42.0, 22.6, 24.5, 50.8, 38.8],
            ['Aider-Edit (Acc.)', 80.5, 79.7, 71.6, 63.9, 84.2, 72.9],
            ['Aider-Polyglot (Acc.)', 50.7, 49.6, 18.2, 5.8, 45.3, 16.0],
        ],
        Math: [
            ['AIME 2024 (Pass@1)', 40.3, 39.2, 16.7, 23.3, 16.0, 9.3],
            ['MATH-500 (EM)', 91.0, 90.2, 74.7, 73.8, 78.3, 74.6],
            ['CNMO 2024 (Pass@1)', 44.1, 43.2, 10.8, 6.8, 13.1, 10.8],
        ],
        Azerbaijani: [
            ['DQ-Eval', 93.5, 85.2, 78.3, 82.1, 80.5, 76.4],
            ['DQ-Correct', 90.2, 86.5, 80.1, 83.2, 81.6, 77.3],
        ]
    }
};