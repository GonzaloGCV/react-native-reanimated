import { NativeReanimated } from '../NativeReanimated/NativeReanimated';
import { ShareableRef } from '../commonTypes';

export default class JSReanimated extends NativeReanimated {
  _valueUnpacker?: <T>(value: T) => void = undefined;

  constructor() {
    super(false);
  }

  getTimestamp(): number {
    console.log('GET TIMESTAMP', window.performance.now());
    return window.performance.now();
  }

  makeShareableClone<T>(value: T): ShareableRef<T> {
    return { __hostObjectShareableJSRef: value };
  }

  installCoreFunctions(valueUnpacker: <T>(value: T) => T): void {
    this._valueUnpacker = valueUnpacker;
  }

  scheduleOnUI<T>(worklet: ShareableRef<T>) {
    // @ts-ignore web implementation has still not been updated after the rewrite, this will be addressed once the web implementation updates are ready
    requestAnimationFrame(worklet);
  }

  registerEventHandler<T>(
    _eventHash: string,
    _eventHandler: ShareableRef<T>
  ): string {
    // noop
    return '';
  }

  unregisterEventHandler(_: string): void {
    // noop
  }

  enableLayoutAnimations() {
    console.warn(
      '[Reanimated] enableLayoutAnimations is not available for WEB yet'
    );
  }

  registerSensor(): number {
    console.warn('[Reanimated] useAnimatedSensor is not available on web yet.');
    return -1;
  }

  unregisterSensor(): void {
    // noop
  }

  subscribeForKeyboardEvents(_: ShareableRef<number>): number {
    console.warn(
      '[Reanimated] useAnimatedKeyboard is not available on web yet.'
    );
    return -1;
  }

  unsubscribeFromKeyboardEvents(_: number): void {
    // noop
  }
}
