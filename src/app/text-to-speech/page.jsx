"use client";
import useTextToSpeech from "@/hooks/useTextToSpeech";

export default function TextToSpeechPage() {
  const text = "This text is being read by me"
  const { handlePlay, handlePause, handleStop } = useTextToSpeech(text);
  return (
    <div className="w-full h-screen flex gap-x-3 items-center justify-center">
      <button onClick={handlePlay} className="px-2 py-3 bg-green-700">
        Bicara
      </button>

      <button onClick={handlePause} className="px-2 py-3 bg-slate-700">
        Jeda
      </button>

      <button onClick={handleStop} className="px-2 py-3 bg-red-800">
        Berhenti
      </button>
    </div>
  );
}
