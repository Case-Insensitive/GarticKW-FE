'use client';
import { useMainboardStore } from '@/store/main';
import { socket } from '@/utils/socket/socket';
import clsx from 'clsx';
import { KonvaEventObject } from 'konva/lib/Node';
import React, { useEffect } from 'react';
import { Layer, Line, Stage } from 'react-konva';

export interface ILine {
	tool: 'pen' | 'eraser';
	points: number[];
	color: string;
}

const Canvas = ({ className }: { className?: string }) => {
	const { color, lines, setLines, tool } = useMainboardStore();
	const isDrawing = React.useRef(false);

	useEffect(() => {
		function onConnect() {
			socket.on('paint', (data) => {
				const { lines } = data;
				console.log(lines);
				setLines(lines);
			});
		}
		socket.on('connect', onConnect);

		return () => {
			socket.off('connect', onConnect);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleMouseDown = (e: KonvaEventObject<MouseEvent>) => {
		isDrawing.current = true;
		const stage = e.target.getStage();
		if (stage !== null) {
			const pos = stage.getPointerPosition();
			if (pos) {
				setLines([...lines, { tool, points: [pos.x, pos.y], color: color }]);
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
	// function handleUndo() {
	// 	if (lines.length > 0) {
	// 		const curr = [...lines];
	// 		const item = curr.pop();
	// 		if (item) {
	// 			const newHistory = [...historyScribbles, item];
	// 			setHistoryScribbles(newHistory);
	// 		}
	// 		setLines(curr);
	// 	}
	// }

	// function handleRedo() {
	// 	if (historyScribbles.length > 0) {
	// 		const curr = [...historyScribbles];
	// 		const item = curr.pop();
	// 		if (item) {
	// 			const newItem = [...lines, item];
	// 			setLines(newItem);
	// 		}
	// 		setHistoryScribbles(curr);
	// 	}
	// }
	return (
		<div className={clsx('w-full shadow-lg', className)}>
			<Stage
				width={900}
				height={350}
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
							stroke={`#${line.color}`}
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
	);
};

export default Canvas;
