import type { Categories } from "../controllers/categoriesController"
import type { Option } from "./staticOption";

class DynamicOptions {
    static categroyOption = (categories: Categories[]) => {

        const options: Option[] = [];
        for (let index = 0; index < categories.length; index++) {
            const category = categories[index];
           
            options.push({ label: `${category.enName} - ${category.khName} - ${category.type}`, value: category._id })
        }
        return options
    }
}

export default DynamicOptions