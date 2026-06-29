export type AnimationState = {
    time: number;
    delta: number;
  };
  
  let previous = 0;
  
  let state: AnimationState = {
    time: 0,
    delta: 0,
  };
  
  const listeners = new Set<
    (state: AnimationState) => void
  >();
  
  function frame(timestamp: number) {
    if (previous === 0) previous = timestamp;
  
    state = {
      time: timestamp * 0.001,
      delta: (timestamp - previous) * 0.001,
    };
  
    previous = timestamp;
  
    listeners.forEach((listener) =>
      listener(state),
    );
  
    requestAnimationFrame(frame);
  }
  
  let running = false;
  
  export function startAnimation() {
    if (running) return;
  
    running = true;
  
    requestAnimationFrame(frame);
  }
  
  export function subscribeAnimation(
    listener: (
      state: AnimationState,
    ) => void,
  ) {
    listeners.add(listener);
  
    return () => listeners.delete(listener);
  }