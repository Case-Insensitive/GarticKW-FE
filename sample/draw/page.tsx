'use client';
import { socket } from '@/utils/socket/socket';
import { KonvaEventObject } from 'konva/lib/Node';
import React, { useEffect } from 'react';
import { Layer, Line, Stage } from 'react-konva';

interface ILine {
	tool: 'pen' | 'eraser';
	points: number[];
}

const DrawPage = () => {
	const [tool, setTool] = React.useState<'pen' | 'eraser'>('pen');
	const [lines, setLines] = React.useState<ILine[]>([]);
	const [historyScribbles, setHistoryScribbles] = React.useState<ILine[]>([]);
	const isDrawing = React.useRef(false);

	function sendDraw(lines: ILine[]) {
		socket.emit('draw', { lines });
	}

	useEffect(() => {
		sendDraw(lines);
	}, [lines]);

	const handleMouseDown = (e: KonvaEventObject<MouseEvent>) => {
		isDrawing.current = true;
		const stage = e.target.getStage();
		if (stage !== null) {
			const pos = stage.getPointerPosition();
			if (pos) {
				setLines([...lines, { tool, points: [pos.x, pos.y] }]);
			}
		}
	};

	const handleMouseMove = (e: KonvaEventObject<MouseEvent>) => {
		// no drawing - skipping
		if (!isDrawing.current) {
			return;
		}
		const stage = e.target.getStage();
		if (stage) {
			const point = stage.getPointerPosition();
			const lastLine = lines[lines.length - 1];

			if (point) {
				lastLine.points = lastLine.points.concat([point.x, point.y]);
			}

			lines.splice(lines.length - 1, 1, lastLine);
			setLines(lines.concat());
		}
	};

	const handleMouseUp = () => {
		isDrawing.current = false;
	};
	function handleUndo() {
		if (lines.length > 0) {
			const curr = [...lines];
			const item = curr.pop();
			if (item) {
				setHistoryScribbles((prev) => [...prev, item]);
			}
			setLines(curr);
		}
	}

	function handleRedo() {
		if (historyScribbles.length > 0) {
			const curr = [...historyScribbles];
			const item = curr.pop();
			if (item) {
				setLines((prev) => [...prev, item]);
			}
			setHistoryScribbles(curr);
		}
	}
	return (
		<div>
			<button onClick={handleUndo}>Undo</button>
			<button onClick={handleRedo}>Redo</button>
			<div className='w-fit shadow-lg'>
				<Stage
					width={500}
					height={500}
					onMouseDown={handleMouseDown}
					onMousemove={handleMouseMove}
					onMouseup={handleMouseUp}
					onMouseLeave={handleMouseUp}
				>
					<Layer>
						{lines.map((line, i) => (
							<Line
								key={i}
								points={line.points}
								stroke='#df4b26'
								strokeWidth={5}
								tension={0.5}
								lineCap='round'
								globalCompositeOperation={
									line.tool === 'eraser' ? 'destination-out' : 'source-over'
								}
							/>
						))}
					</Layer>
				</Stage>
			</div>
			<select
				value={tool}
				onChange={(e) => {
					setTool(e.target.value as 'eraser' | 'pen');
				}}
			>
				<option value='pen'>Pen</option>
				<option value='eraser'>Eraser</option>
			</select>
		</div>
	);
};

export default DrawPage;
