import type { Hub } from "../types";

type Pulse = {
  fromHub: number;
  toHub: number;
};

export class HubEnergy {
  private readonly energy = new Map<
    number,
    number
  >();

  constructor(hubs: Hub[]) {
    hubs.forEach((hub) => {
      this.energy.set(hub.id, 0);
    });
  }

  update(
    delta: number,
    pulses: Pulse[],
  ) {
    for (const [id, value] of this.energy) {
      this.energy.set(
        id,
        Math.max(
          0,
          value - delta * 0.6,
        ),
      );
    }

    pulses.forEach((pulse) => {
      this.add(
        pulse.fromHub,
        delta * 2,
      );

      this.add(
        pulse.toHub,
        delta * 2,
      );
    });
  }

  add(
    hubId: number,
    amount: number,
  ) {
    const current =
      this.energy.get(hubId) ?? 0;

    this.energy.set(
      hubId,
      Math.min(
        1,
        current + amount,
      ),
    );
  }

  get(
    hubId: number,
  ) {
    return (
      this.energy.get(hubId) ??
      0
    );
  }
}