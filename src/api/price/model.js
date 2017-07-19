import mongoose, { Schema } from 'mongoose';

const priceSchema = new Schema(
  {
    currency: {
      type: String,
    },
    amount: {
      type: Number,
    },
    includes_tax: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  },
);

priceSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      currency: this.currency,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };

    return full
      ? {
        ...view,
      }
      : view;
  },
};

const model = mongoose.model('Price', priceSchema);

export const schema = model.schema;
export default model;
