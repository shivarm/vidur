import { addMemberSchema } from '~~/shared/schemas/setting';
import { adminsTable } from '~~/server/db/schema';
import authenticateAdminRequest from '~~/server/utils/admin';

export default defineEventHandler(async (event) => {
  await authenticateAdminRequest(event);

  const request = await readValidatedBody(event, addMemberSchema.parse);

  const db = await useDatabase();

  // await db.update(usersTable).set({ isAdmin: true }).where(eq(usersTable.id, request.id));
});
