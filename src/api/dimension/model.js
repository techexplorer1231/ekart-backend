import mongoose, { Schema } from 'mongoose';

const dimensionSchema = new Schema(
  {
    unit: {
      type: String,
      default: 'cm',
      enum: ['cm', 'm', 'ft', 'in', 'yd', 'mi'],
    },
    measurement: {
      type: String,
      default: 'length',
      enum: ['length', 'width', 'height'],
    },
    value: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

dimensionSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      unit: this.unit,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };

    return full
      ? {
        ...view,
          // add properties for a full view
      }
      : view;
  },
};

const model = mongoose.model('Dimension', dimensionSchema);

export const schema = model.schema;
export default model;
