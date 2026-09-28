export function renameSpeaker(segments,speakerId,displayName){const name=displayName.trim()||speakerId;return segments.map(s=>s.speakerId===speakerId?{...s,speakerName:name}:s)}
