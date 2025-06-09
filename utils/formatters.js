export function formatDistance(meters) {
    if (meters < 1000) return `${meters.toFixed(0)} m`;
    return `${(meters / 1000).toFixed(1)} km`;
  }
  
  export function formatDuration(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    if (mins > 0) return `${mins} min ${secs} s`;
    return `${secs} s`;
  }
  
  export function formatDate(date) {
    return date.toLocaleDateString();
  }
  