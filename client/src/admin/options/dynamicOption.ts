import type { Categories } from "../controllers/categoriesController"
import type { Option } from "./staticOption";

class DynamicOptions {
    static categroyOption = (categories: Categories[]) => {
        console.log("🚀 ~ file: dynamicOption.ts:12 ~ DynamicOptions ~ categories:", categories)
        const options: Option[] = [];
        for (let index = 0; index < categories.length; index++) {
            const category = categories[index];
            options.push({ label: `${category.enName} - ${category.khName}`, value: category._id })
        }
        return options
    }
}

export default DynamicOptions