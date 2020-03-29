export interface Decision {
  execute(): Promise<{ intent: string; data: any }>;
}
