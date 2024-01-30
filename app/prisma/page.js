import  Prisma from '@/utils/db' ;

const prismaHandler = async () =>{
    // await Prisma.task.create({
    //     data:{
    //         content: 'wake up',
    //     }
    // })
    const allTasks = await Prisma.task.findMany({
        orderBy:{
            createdAt: 'desc'
        }
    })
    return allTasks;
}

const PrismaExample = async () => {
    const tasks = await prismaHandler();
    return (
        <div>
            <h1 className = 'text-7xl'>Prisma Page</h1>
            {tasks.map((task) =>{
                return(
                    <h2 key={task.id} className='text-xl py-2'>
                    : {task.content}
                    </h2>
                )
            })}
        </div>
    );
};

export default PrismaExample