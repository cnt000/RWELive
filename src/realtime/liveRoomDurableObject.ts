export class LiveRoomDurableObject {
  constructor(
    readonly state: unknown,
    readonly env: Env,
  ) {
    state;
    env;
  }
}
