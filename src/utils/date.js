export function formatDate(date){
    const formatter = Intl.DateTimeFormat("en-IN",{
        year:"numeric",
        month:"short",
        day:"2-digit"
        })
    return formatter.format(date)
}

