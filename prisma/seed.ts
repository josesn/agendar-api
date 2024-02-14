import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

// initialize Prisma Client
const prisma = new PrismaClient();
const roundsOfHashing = 10;

async function main() {
    const passwordUserTest = await bcrypt.hash('@@password1234', roundsOfHashing);
    const passwordUserStaff = await bcrypt.hash('@@password4321', roundsOfHashing);
    
    const user1 = await prisma.user.upsert({
      where: { email: 'usertest@teste.com' },
      update: {password: passwordUserTest,},
      create: {
        email: 'usertest@teste.com',
        name: 'User Dev Test',
        staff: false,
        password: passwordUserTest,
      },
    });
  
    const user2 = await prisma.user.upsert({
      where: { email: 'userteststaff@teste.com' },
      update: { password: passwordUserStaff,},
      create: {
        email: 'userteststaff@teste.com',
        name: 'User Dev Staff Test',
        staff: true,
        password: passwordUserStaff,
      },
    });
    console.log({ user1, user2});

    const vehicle1 = await prisma.vehicle.upsert({
      where: { plate: 'CID0753'},
      update: { },
      create: {
        brand: 'FIAT',
        model: 'Palio',
        color: "AZUL",
        plate: "CID0753",
        year: "2010",
        userId: user1.id,
      }
    });
    console.log({ user1, user2});

    const vehicle2 = await prisma.vehicle.upsert({
      where: { plate: 'MXS2735'},
      update: { },
      create: {
        brand: 'FIAT',
        model: 'MAREA',
        color: "BRANCO",
        plate: "MXS2735",
        year: "2015",
        userId: user2.id,
      }
    });

    const activityType1 = await prisma.activity.upsert({
      where: { id: 1},
      update: { },
      create: {
        name: 'Revisão programada',
      }
    });

    
    const activityType2 = await prisma.activity.upsert({
      where: { id: 2},
      update: { },
      create: {
        name: 'Check-up',
      }
    });


    const activityType3 = await prisma.activity.upsert({
      where: { id: 3},
      update: { },
      create: {
        name: 'Checagem de pneus',
      }
    });


    const activityType4 = await prisma.activity.upsert({
      where: { id: 4},
      update: { },
      create: {
        name: 'Alinhamento da suspensão',
      }
    });


    const activityType5 = await prisma.activity.upsert({
      where: { id: 5},
      update: { },
      create: {
        name: 'Revisão programada',
      }
    });


    const activityType6 = await prisma.activity.upsert({
      where: { id: 6},
      update: { },
      create: {
        name: 'Limpeza',
      }
    });


    const activityType7 = await prisma.activity.upsert({
      where: { id: 7},
      update: { },
      create: {
        name: 'Seguro',
      }
    });


    const activityType8 = await prisma.activity.upsert({
      where: { id: 8},
      update: { },
      create: {
        name: 'Pintura',
      }
    });


    const activityType9 = await prisma.activity.upsert({
      where: { id: 9},
      update: { },
      create: {
        name: 'Manutenção',
      }
    });



    console.log({ user1, user2, vehicle1, vehicle2,
      activityType1, activityType2, activityType3, activityType4, activityType5,
      activityType6, activityType7, activityType8, activityType9});
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })