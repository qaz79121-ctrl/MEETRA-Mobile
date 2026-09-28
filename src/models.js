export function validateMode(mode){if(!['standard','privacy'].includes(mode))throw new Error('Invalid meeting mode');return mode}
export function createMeeting({title='Untitled Meeting',mode='standard'}={}){return{id:crypto.randomUUID(),title,mode:validateMode(mode),createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),durationMs:0,transcriptSegments:[],aiResult:null,audioBlob:null,markers:[]}}
export function matchesMeeting(m,q){q=q.trim().toLowerCase();if(!q)return true;return `${m.title} ${(m.transcriptSegments||[]).map(s=>s.text).join(' ')}`.toLowerCase().includes(q)}
