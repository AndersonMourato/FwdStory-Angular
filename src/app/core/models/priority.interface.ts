export interface IPriority {
    id?: number;
    title: string;
    textContent: string;
    dateUpdate: string;
    concluded: boolean;
}

export const priorityMocks: IPriority[] = [
    { id: 1, title: 'Priority 1', textContent: 'textContent for priority 1', concluded: true, dateUpdate: '2023-01-01' },
    { id: 2, title: 'Priority 2', textContent: 'textContent for priority 2', concluded: true, dateUpdate: '2023-02-01' },
    { id: 3, title: 'Priority 3', textContent: 'textContent for priority 3', concluded: false, dateUpdate: '2023-03-01' },
    { id: 4, title: 'Priority 4', textContent: 'textContent for priority 4', concluded: true, dateUpdate: '2023-04-01' },
    { id: 5, title: 'Priority 5', textContent: 'textContent for priority 5', concluded: false, dateUpdate: '2023-05-01' },
    { id: 6, title: 'Priority 6', textContent: 'textContent for priority 6', concluded: true, dateUpdate: '2023-06-01' },
    { id: 7, title: 'Priority 7', textContent: 'Text for priority 7', concluded: true, dateUpdate: '2023-07-01' }
];