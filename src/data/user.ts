import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({ where: { email } });

    return user;
  } catch {
    return null;
  }
};

export const addTelegramIdToUser = async (uId: string, telegramId: string) => {
  try {
    const user = await db.user.update({
      where: { uId },
      data: {
        teleId: telegramId,
      },
    });

    return user;
  } catch {
    return null;
  }
}

export const getUserById = async (uId: string) => {
  try {
    const user = await db.user.findUnique({ where: { uId } });

    return user;
  } catch {
    return null;
  }
};

export const getAlertEntriesByUser = async (user: any) => {
  try {
    const alertEntries = await db.floorAlerts.findMany({
      where: {
        user: {
          uId: user.uId,
        },
      },
    });
    return alertEntries;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
