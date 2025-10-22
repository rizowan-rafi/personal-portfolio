import {animate, motion} from "framer-motion"

const StairAnimation = {
    initial: {
        top:"0%",
    },
    animate: {
        top:"100%",
    },
    exit: {
        top:["100%","0%"]
    }
}

const revertIndex = (idx) => {
    const totalSteps = 6;
    return totalSteps - idx - 1;
}

const Stairs = () => {
  return (
    <>
          {[...Array(6)].map((_, index) => {
            return (
                <motion.div
                    key={index}
                    variants={StairAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                        delay: revertIndex(index) * 0.1,
                    }}
                    className="h-full w-full bg-white relative"
                />
            );
    })}
    </>
  )
}

export default Stairs
