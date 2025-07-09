import { Box } from '../atoms';

interface RoadBarProps {
  barHeight: number | string;
}

export default function RoadBar({ barHeight }: RoadBarProps) {
  return (
    <Box
      sx={{
        width: '100%',
        height: barHeight,
        bgcolor: '#444',

        position: 'absolute',
        left: 0,
        top: 25,
        zIndex: 0,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Dashed white lines */}
      <Box
        sx={{
          width: '100%',
          height: 2,
          position: 'absolute',
          top: '50%',
          left: 0,
          transform: 'translateY(-50%)',
          display: 'flex',
          justifyContent: 'space-between',
          px: 2,
        }}
      >
        {Array.from({ length: 36 }).map((_, i) => (
          <Box
            key={i}
            sx={{
              width: '1%',
              height: '100%',
              bgcolor: '#fff',
              borderRadius: 1,
              opacity: 0.7,
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
