import mongoose, { Schema } from 'mongoose';
import keywords from 'mongoose-keywords';
import { schema as PriceSchema } from '../price/model';
import { schema as DimensionSchema } from '../dimension/model';
import { schema as WeightSchema } from '../weight/model';

const productSchema = new Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    slug: {
      type: String,
    },
    status: {
      type: String,
      default: 'Live',
      enum: ['Draft', 'Live'],
    },
    sku: {
      type: String,
    },
    manage_stock: {
      type: Boolean,
    },
    price: [PriceSchema],
    commodity_type: {
      type: String,
      default: 'Physical',
      enum: ['Physical', 'Digital'],
    },
    dimensions: [DimensionSchema],
    weight: [WeightSchema],
  },
  {
    timestamps: true,
  },
);

productSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      description: this.description,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };

    return full
      ? {
        date: new Date(),
        ...view,
      }
      : view;
  },
};

productSchema.plugin(keywords, { paths: ['name'] });
const model = mongoose.model('Product', productSchema);

export const schema = model.schema;
export default model;
