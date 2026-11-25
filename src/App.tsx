import { useCallback, useEffect, useState } from 'react';
import { SlideDeckControls } from './components/SlideDeckControls';
import { SlideOverviewModal } from './components/SlideOverviewModal';
import { TopBar } from './components/TopBar';
import { SlideAppAnalysis } from './components/slides/SlideAppAnalysis';
import { SlideAppAstronomy } from './components/slides/SlideAppAstronomy';
import { SlideAppIndustry } from './components/slides/SlideAppIndustry';
import { SlideAppMedicine } from './components/slides/SlideAppMedicine';
import { SlideAppSecurity } from './components/slides/SlideAppSecurity';
import { SlideAttenuation } from './components/slides/SlideAttenuation';
import { SlideControl } from './components/slides/SlideControl';
import { SlideCover } from './components/slides/SlideCover';
import { SlideHistory } from './components/slides/SlideHistory';
import { SlideMechanismProcess } from './components/slides/SlideMechanismProcess';
import { SlideProperties } from './components/slides/SlideProperties';
import { SlideQuiz } from './components/slides/SlideQuiz';
import { SlideSafety } from './components/slides/SlideSafety';
import { SlideTubeStructure } from './components/slides/SlideTubeStructure';
import { SlideTwoTypes } from './components/slides/SlideTwoTypes';
import { SlideWaveNature } from './components/slides/SlideWaveNature';
import { SLIDES_META } from './data/slidesData';
import { clampSlideIndex } from './utils/xrayPhysics';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [overviewOpen, setOverviewOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const totalSlides = SLIDES_META.length;

  const goToSlide = useCallback(
    (index: number) => {
      setCurrentSlide(clampSlideIndex(index, totalSlides));
    },
    [totalSlides]
  );

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => clampSlideIndex(prev + 1, totalSlides));
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    setCurrentSlide((prev) => clampSlideIndex(prev - 1, totalSlides));
  }, [totalSlides]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  }, []);

  useEffect(() => {
    const onFsChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (overviewOpen) return;
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrev();
      } else if (e.key.toLowerCase() === 'f') {
        toggleFullscreen();
      } else if (e.key.toLowerCase() === 'm') {
        setOverviewOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, overviewOpen, toggleFullscreen]);

  const renderSlide = () => {
    switch (currentSlide) {
      case 0:
        return (
          <SlideCover
            onStart={() => goToSlide(1)}
            onOpenOverview={() => setOverviewOpen(true)}
          />
        );
      case 1:
        return <SlideHistory />;
      case 2:
        return <SlideWaveNature />;
      case 3:
        return <SlideTubeStructure />;
      case 4:
        return <SlideMechanismProcess />;
      case 5:
        return <SlideTwoTypes />;
      case 6:
        return <SlideControl />;
      case 7:
        return <SlideProperties />;
      case 8:
        return <SlideAttenuation />;
      case 9:
        return <SlideAppMedicine />;
      case 10:
        return <SlideAppIndustry />;
      case 11:
        return <SlideAppSecurity />;
      case 12:
        return <SlideAppAnalysis />;
      case 13:
        return <SlideAppAstronomy />;
      case 14:
        return <SlideSafety />;
      case 15:
        return <SlideQuiz />;
      default:
        return (
          <SlideCover
            onStart={() => goToSlide(1)}
            onOpenOverview={() => setOverviewOpen(true)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#070B12] text-slate-100">
      <TopBar
        currentSlide={currentSlide}
        onSelectSlide={goToSlide}
        onOpenOverview={() => setOverviewOpen(true)}
      />

      <main className="flex-1 flex items-center justify-center py-2">
        <div key={currentSlide} className="w-full animate-slide-enter">
          {renderSlide()}
        </div>
      </main>

      <SlideDeckControls
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        isFullscreen={isFullscreen}
        onPrev={handlePrev}
        onNext={handleNext}
        onSelectSlide={goToSlide}
        onToggleFullscreen={toggleFullscreen}
      />

      <SlideOverviewModal
        isOpen={overviewOpen}
        currentSlide={currentSlide}
        onClose={() => setOverviewOpen(false)}
        onSelectSlide={goToSlide}
      />
    </div>
  );
}
