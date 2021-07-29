const formatMs = (ms: number) => {
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms - hours * 3600000) / 60000);
    const seconds = Math.floor((ms - hours * 3600000 - minutes * 60000) / 1000);
    return `${hours ? hours.toString() + ':' : ''}${minutes}:${seconds.toString().padStart(2, '0')}`;
};

export default formatMs;
