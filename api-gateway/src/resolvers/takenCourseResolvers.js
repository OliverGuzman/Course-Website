const TakenCourseResolver={
    Query:{
        currentTakenCourse:async(_,{userIdFk},{dataSources, userIdToken})=>{
            if(userIdFk==userIdToken)
                return await dataSources.takenCourseAPI.currentTakenCourse(userIdFk);
            else
                return null;
        },
        finishedTakenCourse:async(_,{userIdFk},{dataSources, userIdToken})=>{
            if(userIdFk==userIdToken)
                return await dataSources.takenCourseAPI.finishedTakenCourse(userIdFk);
            else
                return null;
        }
    },
    Mutation:{
        join_course:async (_,{takenCourse}, {dataSources, userIdToken})=>{
            if (takenCourse.userIdFk==userIdToken)
                return await dataSources.takenCourseAPI.subscribe(takenCourse);
            else
                return null;
        },
        updateProgressCourse:async (_,{takenCourse}, {dataSources, userIdToken})=>{
            if (takenCourse.userIdFk==userIdToken)
                return await dataSources.takenCourseAPI.updateProgress(takenCourse);
            else
                return null;
        },
        completeTakenCourse:async (_,{takenCourse}, {dataSources, userIdToken})=>{
            if (takenCourse.userIdFk==userIdToken)
                return await dataSources.takenCourseAPI.completeCourse(takenCourse);
            else
                return null;
        }
    }
}
module.exports = TakenCourseResolver;