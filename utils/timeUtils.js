export function getCurrentTime() {
    return new Date().getTime();
  }
  
  export function isNightTime() {
    const hour = new Date().getHours();
    return hour < 6 || hour > 20;
  }
  