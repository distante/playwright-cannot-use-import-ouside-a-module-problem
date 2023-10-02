import { expect, test } from '@playwright/test';

import { Storage } from '@ionic/storage-angular';

let storageInstance: Storage | undefined = undefined;

async function getStorage(): Promise<Storage> {
  if (!storageInstance) {
    const storage = new Storage();

    storageInstance = await storage.create();
  }
  return storageInstance;
}

async function deleteAllStorage(): Promise<void> {
  const storage = await getStorage();

  await storage.clear();
}


test('should start page', async ({ page }) => {
  await page.goto('/');

  expect(true).toBeTruthy();
});
