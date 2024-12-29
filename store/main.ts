import { ILine } from '@/components/canvas/canvas';
import { colors } from '@/data/colors';
import { create } from 'zustand';
export interface IMainboardStore {
	tool: 'pen' | 'eraser';
	setTool: (tool: 'pen' | 'eraser') => void;
	lines: ILine[];
	setLines: (lines: ILine[]) => void;
	historyScribbles: ILine[];
	setHistoryScribbles: (lines: ILine[]) => void;
	color: string;
	setColor: (color: string) => void;
	clearMainboard: () => void;
}

export const useMainboardStore = create<IMainboardStore>((set) => ({
	tool: 'pen',
	lines: [],
	historyScribbles: [],
	setTool: (tools) => set({ tool: tools }),
	setHistoryScribbles: (history) => set({ historyScribbles: history }),
	setLines: (lines) => set({ lines }),
	color: colors[0],
	setColor: (color) => set({ color }),
	clearMainboard: () => set({ lines: [] }),
}));
