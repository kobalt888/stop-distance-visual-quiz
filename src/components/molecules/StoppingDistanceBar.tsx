import { BarSegment } from '../atoms';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useTheme } from '@mui/material';

interface StoppingDistanceBarProps {
  barWidth: number;
  barHeight: number;
  pFrac: number;
  rFrac: number;
  bFrac: number;
  step: number;
  footPedalImg: string;
  brakeImg: string;
}

const iconCommonStyle: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  opacity: 1,
  pointerEvents: 'none',
};

const SEGMENTS = [
  {
    key: 'perception',
    color: 'primary.main',
    icon: (show: boolean) =>
      show && (
        <VisibilityIcon
          sx={{
            ...iconCommonStyle,
            left: '50%',
            color: '#fff',
            fontSize: 32,
          }}
        />
      ),
  },
  {
    key: 'reaction',
    color: 'secondary.main',
    icon: (show: boolean, footPedalImg: string) =>
      show && (
        <img
          src={footPedalImg}
          alt="Foot Pedal"
          style={{
            ...iconCommonStyle,
            left: '50%',
            width: 32,
            height: 32,
          }}
        />
      ),
  },
  {
    key: 'braking',
    color: 'error.main',
    icon: (show: boolean, _footPedalImg: string, brakeImg: string) =>
      show && (
        <img
          src={brakeImg}
          alt="Brake"
          style={{
            ...iconCommonStyle,
            left: '25%',
            width: 64,
            height: 32,
          }}
        />
      ),
  },
];

export default function StoppingDistanceBar({
  barWidth,
  barHeight,
  pFrac,
  rFrac,
  bFrac,
  step,
  footPedalImg,
  brakeImg,
}: StoppingDistanceBarProps) {
  const theme = useTheme();
  const fracs = [pFrac, rFrac, bFrac];
  let left = 0;
  return (
    <>
      {SEGMENTS.map((seg, i) => {
        const show = step >= i + 1;
        const width = show ? barWidth * fracs[i] : 0;
        const segLeft = left;
        left += barWidth * fracs[i];
        let color = theme.palette.primary.main;
        if (seg.key === 'reaction') color = theme.palette.secondary.main || '#6366f1';
        if (seg.key === 'braking') color = theme.palette.error.main || '#ef4444';
        return (
          <BarSegment
            key={seg.key}
            width={width}
            left={segLeft}
            color={color}
            barHeight={barHeight}
            opacity={0.7}
            icon={
              seg.key === 'perception'
                ? seg.icon(show, footPedalImg, brakeImg)
                : seg.key === 'reaction'
                ? seg.icon(show, footPedalImg, brakeImg)
                : seg.icon(show, footPedalImg, brakeImg)
            }
          />
        );
      })}
    </>
  );
}
