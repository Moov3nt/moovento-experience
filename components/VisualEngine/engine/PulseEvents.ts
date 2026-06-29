export type PulseArrivalEvent = {
    hubId: number;
  };
  
  export class PulseEventBus {
    private arrivalListeners: Array<
      (event: PulseArrivalEvent) => void
    > = [];
  
    onArrival(
      listener: (
        event: PulseArrivalEvent,
      ) => void,
    ) {
      this.arrivalListeners.push(
        listener,
      );
  
      return () => {
        this.arrivalListeners =
          this.arrivalListeners.filter(
            (l) => l !== listener,
          );
      };
    }
  
    emitArrival(
      hubId: number,
    ) {
      const event = { hubId };
  
      this.arrivalListeners.forEach(
        (listener) =>
          listener(event),
      );
    }
  }